package main

import (
	"encoding/json"
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"os"
	"path/filepath"
	"reflect"
	"sort"
	"strings"
	"time"
	"unicode"

	"github.com/filecoin-project/go-address"
	"github.com/filecoin-project/go-bitfield"
	"github.com/filecoin-project/go-fil-markets/filestore"
	"github.com/filecoin-project/go-jsonrpc/auth"
	"github.com/filecoin-project/go-multistore"
	"github.com/filecoin-project/lotus/api"
	"github.com/filecoin-project/lotus/build"
	"github.com/filecoin-project/lotus/chain/types"
	"github.com/filecoin-project/lotus/node/modules/dtypes"
	"github.com/filecoin-project/sector-storage/sealtasks"
	"github.com/filecoin-project/sector-storage/stores"
	"github.com/filecoin-project/sector-storage/storiface"
	"github.com/filecoin-project/specs-actors/actors/abi"
	"github.com/filecoin-project/specs-actors/actors/crypto"
	"github.com/filecoin-project/specs-actors/actors/runtime/exitcode"
	"github.com/ipfs/go-cid"

	// "github.com/ipfs/go-filestore"
	"github.com/libp2p/go-libp2p-core/network"
	peer "github.com/libp2p/go-libp2p-peer"
	"github.com/multiformats/go-multiaddr"
)

var ExampleValues = map[reflect.Type]interface{}{
	reflect.TypeOf(auth.Permission("")): auth.Permission("write"),
	reflect.TypeOf(""):                  "string value",
	reflect.TypeOf(uint64(42)):          uint64(42),
	reflect.TypeOf(byte(7)):             byte(7),
	reflect.TypeOf([]byte{}):            []byte("byte array"),
}

func addExample(v interface{}) {
	fmt.Fprintf(os.Stderr, "Add example %v %v\n", reflect.TypeOf(v), v)
	ExampleValues[reflect.TypeOf(v)] = v
}

func init() {
	c, err := cid.Decode("bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4")
	if err != nil {
		panic(err)
	}

	ExampleValues[reflect.TypeOf(c)] = c

	c2, err := cid.Decode("bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve")
	if err != nil {
		panic(err)
	}

	tsk := types.NewTipSetKey(c, c2)

	ExampleValues[reflect.TypeOf(tsk)] = tsk

	addr, err := address.NewIDAddress(1234)
	if err != nil {
		panic(err)
	}

	ExampleValues[reflect.TypeOf(addr)] = addr

	pid, err := peer.IDB58Decode("12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf")
	if err != nil {
		panic(err)
	}
	addExample(pid)

	addExample(bitfield.NewFromSet([]uint64{5}))
	// addExample(abi.RegisteredProof_StackedDRG32GiBPoSt)
	addExample(abi.ChainEpoch(10101))
	addExample(crypto.SigTypeBLS)
	addExample(int64(9))
	addExample(abi.MethodNum(1))
	addExample(exitcode.ExitCode(0))
	addExample(crypto.DomainSeparationTag_ElectionProofProduction)
	addExample(true)
	addExample(abi.UnpaddedPieceSize(1024))
	addExample(abi.UnpaddedPieceSize(1024).Padded())
	addExample(abi.DealID(5432))
	// addExample(filestore.StatusFileChanged)
	var fsPath filestore.Path = "/tmp/file"
	addExample(fsPath)
	addExample(abi.SectorNumber(9))
	addExample(abi.SectorSize(32 * 1024 * 1024 * 1024))
	addExample(api.MpoolChange(0))
	addExample(network.Connected)
	addExample(dtypes.NetworkName("lotus"))
	addExample(api.SyncStateStage(1))
	addExample(build.APIVersion)
	addExample(api.PCHInbound)
	addExample(time.Minute)
	/*
		addExample(&types.ExecutionResult{
			Msg:    exampleValue(reflect.TypeOf(&types.Message{})).(*types.Message),
			MsgRct: exampleValue(reflect.TypeOf(&types.MessageReceipt{})).(*types.MessageReceipt),
		})
	*/
	addExample(map[string]types.Actor{
		"t01236": exampleValue(reflect.TypeOf(types.Actor{})).(types.Actor),
	})
	addExample(map[string]api.MarketDeal{
		"t026363": exampleValue(reflect.TypeOf(api.MarketDeal{})).(api.MarketDeal),
	})
	addExample(map[string]api.MarketBalance{
		"t026363": exampleValue(reflect.TypeOf(api.MarketBalance{})).(api.MarketBalance),
	})
	// FIXME: Find actual API example
	addExample(map[string][]api.SealedRef{
		"key1": []api.SealedRef{
			{0, 0, 100},
		},
	})
	// FIXME: Find actual API example
	var sectorState api.SectorState = "sectorState"
	addExample(sectorState)
	// FIXME: Find actual API example
	var storesID stores.ID = "uuid"
	addExample(storesID)
	addExample(float64(123.456))
	// FIXME: Find actual API example
	var storesSectorFileType stores.SectorFileType = 0
	addExample(storesSectorFileType)
	// FIXME: Find actual API example
	var storesPathType stores.PathType = stores.PathSealing
	addExample(storesPathType)
	// FIXME: Find actual API example
	var abiActorID abi.ActorID = 1234
	addExample(abiActorID)
	// FIXME: Find actual API example
	addExample(map[stores.ID][]stores.Decl{
		"uuid1": []stores.Decl{
			{abi.SectorID{0, 0}, 0},
		},
	})
	// FIXME: Find actual API example
	addExample(map[stores.ID]string{
		"uuid1": "string",
	})
	// FIXME: Find actual API example
	addExample(map[uint64]storiface.WorkerStats{
		0: storiface.WorkerStats{
			Info: storiface.WorkerInfo{
				"hostname",
				storiface.WorkerResources{
					MemPhysical: 1000,
					MemSwap:     1000,
					MemReserved: 1000,
					CPUs:        1,
					GPUs: []string{
						"gpu1",
					},
				},
			},
			MemUsedMin: 100,
			MemUsedMax: 5000,
			GpuUsed:    true,
			CpuUse:     1000,
		},
	})
	storeID := multistore.StoreID(6)
	addExample(&storeID)
	addExample(abi.RegisteredSealProof_StackedDrg2KiBV1)
	addExample(map[uint64][]storiface.WorkerJob{
		0: []storiface.WorkerJob{
			{
			ID:     123,
			Sector: abi.SectorID{0, 0},
			Task:   sealtasks.TTPreCommit1,
			Start:  time.Now(),
		},
		},
	})

	maddr, err := multiaddr.NewMultiaddr("/ip4/52.36.61.156/tcp/1347/p2p/12D3KooWFETiESTf1v4PGUvtnxMAcEFMzLZbJGg4tjWfGEimYior")
	if err != nil {
		panic(err)
	}

	// because reflect.TypeOf(maddr) returns the concrete type...
	ExampleValues[reflect.TypeOf(struct{ A multiaddr.Multiaddr }{}).Field(0).Type] = maddr

}

func exampleValue(t reflect.Type) interface{} {
	v, ok := ExampleValues[t]
	if ok {
		return v
	}

	switch t.Kind() {
	case reflect.Slice:
		out := reflect.New(t).Elem()
		reflect.Append(out, reflect.ValueOf(exampleValue(t.Elem())))
		return out.Interface()
	case reflect.Chan:
		return exampleValue(t.Elem())
	case reflect.Struct:
		es := exampleStruct(t)
		v := reflect.ValueOf(es).Elem().Interface()
		ExampleValues[t] = v
		return v
	case reflect.Array:
		out := reflect.New(t).Elem()
		for i := 0; i < t.Len(); i++ {
			out.Index(i).Set(reflect.ValueOf(exampleValue(t.Elem())))
		}
		return out.Interface()

	case reflect.Ptr:
		if t.Elem().Kind() == reflect.Struct {
			es := exampleStruct(t.Elem())
			//ExampleValues[t] = es
			return es
		}
	case reflect.Interface:
		return struct{}{}
	}

	panic(fmt.Sprintf("No example value for type: %s", t))
}

func exampleStruct(t reflect.Type) interface{} {
	ns := reflect.New(t)
	// fmt.Fprintf(os.Stderr, "Jim exampleStruct %v\n", t)
	for i := 0; i < t.NumField(); i++ {
		f := t.Field(i)
		// fmt.Fprintf(os.Stderr, "Jim exampleStruct f %v\n", f)
		// fmt.Fprintf(os.Stderr, "Jim type %v\n", f.Type)
		if strings.Title(f.Name) == f.Name {
			// fmt.Fprintf(os.Stderr, "Jim example %v\n", exampleValue(f.Type))
			if f.Type.String() == "error" {
				// FIXME - what to do here?
			} else {
				ns.Elem().Field(i).Set(reflect.ValueOf(exampleValue(f.Type)))
			}
		}
	}

	return ns.Interface()
}

type Visitor struct {
	Methods map[string]ast.Node
}

func (v *Visitor) Visit(node ast.Node) ast.Visitor {
	st, ok := node.(*ast.TypeSpec)
	if !ok {
		return v
	}

	// Jim - modified
	if st.Name.Name != "StorageMiner" {
		return nil
	}

	iface := st.Type.(*ast.InterfaceType)
	for _, m := range iface.Methods.List {
		if len(m.Names) > 0 {
			v.Methods[m.Names[0].Name] = m
		}
	}

	return v
}

const noComment = "There are not yet any comments for this method."

func parseApiASTInfo() (map[string]string, map[string]string) {

	fset := token.NewFileSet()
	apiDir := filepath.Join(os.Args[1], "api")
	pkgs, err := parser.ParseDir(fset, apiDir, nil,
		parser.AllErrors|parser.ParseComments)
	if err != nil {
		fmt.Println("parse error: ", err)
	}

	ap := pkgs["api"]

	// Jim - modified
	f := ap.Files[filepath.Join(apiDir, "api_storage.go")]

	cmap := ast.NewCommentMap(fset, f, f.Comments)

	v := &Visitor{make(map[string]ast.Node)}
	ast.Walk(v, pkgs["api"])

	groupDocs := make(map[string]string)
	out := make(map[string]string)
	for mn, node := range v.Methods {
		cs := cmap.Filter(node).Comments()
		if len(cs) == 0 {
			out[mn] = noComment
		} else {
			for _, c := range cs {
				if strings.HasPrefix(c.Text(), "MethodGroup:") {
					parts := strings.Split(c.Text(), "\n")
					groupName := strings.TrimSpace(parts[0][12:])
					comment := strings.Join(parts[1:], "\n")
					groupDocs[groupName] = comment

					break
				}
			}

			last := cs[len(cs)-1].Text()
			if !strings.HasPrefix(last, "MethodGroup:") {
				out[mn] = last
			} else {
				out[mn] = noComment
			}
		}
	}
	return out, groupDocs
}

type MethodGroup struct {
	GroupName string
	Header    string
	Methods   []*Method
}

type Method struct {
	Comment         string
	Name            string
	InputExample    string
	ResponseExample string
}

func methodGroupFromName(mn string) string {
	i := strings.IndexFunc(mn[1:], func(r rune) bool {
		return unicode.IsUpper(r)
	})
	if i < 0 {
		return ""
	}
	return mn[:i+1]
}

func main() {
	comments, groupComments := parseApiASTInfo()

	groups := make(map[string]*MethodGroup)

	// Jim - modified
	var api struct{ api.StorageMiner }
	t := reflect.TypeOf(api)
	for i := 0; i < t.NumMethod(); i++ {
		m := t.Method(i)

		fmt.Fprintf(os.Stderr, "Jim method %v\n", m.Name)
		groupName := methodGroupFromName(m.Name)

		g, ok := groups[groupName]
		if !ok {
			g = new(MethodGroup)
			g.Header = groupComments[groupName]
			g.GroupName = groupName
			groups[groupName] = g
		}

		var args []interface{}
		ft := m.Func.Type()
		for j := 2; j < ft.NumIn(); j++ {
			inp := ft.In(j)
			args = append(args, exampleValue(inp))
		}

		v, err := json.Marshal(args)
		if err != nil {
			panic(err)
		}

		outv := exampleValue(ft.Out(0))

		ov, err := json.Marshal(outv)
		if err != nil {
			panic(err)
		}

		g.Methods = append(g.Methods, &Method{
			Name:            m.Name,
			Comment:         comments[m.Name],
			InputExample:    string(v),
			ResponseExample: string(ov),
		})
	}

	var groupslice []*MethodGroup
	for _, g := range groups {
		groupslice = append(groupslice, g)
	}

	sort.Slice(groupslice, func(i, j int) bool {
		return groupslice[i].GroupName < groupslice[j].GroupName
	})

	for _, g := range groupslice {
		fmt.Printf("## %s\n", g.GroupName)
		fmt.Printf("%s\n\n", g.Header)

		sort.Slice(g.Methods, func(i, j int) bool {
			return g.Methods[i].Name < g.Methods[j].Name
		})

		for _, m := range g.Methods {
			fmt.Printf("### %s\n", m.Name)
			fmt.Printf("%s\n\n", m.Comment)

			fmt.Printf("Inputs: `%s`\n\n", m.InputExample)
			fmt.Printf("Response: `%s`\n\n", m.ResponseExample)
		}
	}
}
