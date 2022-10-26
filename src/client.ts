import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/counter'

const PORT = 3030
const PROTO_FILE = '../proto/counter.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.counter.Counter(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure())

switch (process.argv[2]) {
  case 'increment':
    client.IncrementCounter({}, (err, response) => {
        if (err) throw err;

        console.log(response?.message)
      })
    break;
  case 'get':
    client.GetCounterValue({}, (err, response) => {
      if (err) throw err;

      console.log(response)
    })
    break;
  case 'print':
    client.PrintCounterValue({}, (err, resp) => {
      if (err) throw err;
      
    })
    break;
  default:
    console.log("Command NOT Found")
    break;
}
