import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/counter'

const PORT = 3030
const PROTO_FILE = '../proto/counter.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.counter.Counter(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure())

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 10)
client.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err)
    return
  }
  onClientReady()
})

function onClientReady() {
  client.IncrementCounter({ message: "JPT" }, (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
  })
}