import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/counter'
import { CounterHandlers } from '../proto/counter/Counter'

const PORT = 3030
const PROTO_FILE = '../proto/counter.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const counterPackage = grpcObj.counter

let counter = 0

function main() {
  const server = getServer()

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(`Your server has started on port ${port}`)
      server.start()
    }
  )
}

function getServer() {
  const server = new grpc.Server()
  server.addService(
    counterPackage.Counter.service, {
    IncrementCounter: (_, res) => {
      counter += 1
      res(null, { message: "Counter incremented!!!" })
    },
    GetCounterValue: (_,res) => {
      res(null, { count: counter })
    },
    PrintCounterValue: (_, res) => {
      console.log("Counter value: ", counter)
      res(null, {})
    }

  } as CounterHandlers)

  return server
}

main()
