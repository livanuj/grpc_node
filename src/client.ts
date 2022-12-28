import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/greetings'

const PORT = 3030
const PROTO_FILE = '../proto/greetings.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.greetings.Greetings(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure())

const name = process.argv[2] || "Anuj Shrestha"
client.GetGreetings({ name: name }, (err, rsp) => {
  if (err) throw err;

  console.log("Response Message", rsp?.message)
})
