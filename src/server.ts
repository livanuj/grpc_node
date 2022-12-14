import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/greetings'
import { HelloServiceImpl } from './helloServiceImpl'
import { GreetingsHandlers } from '../proto/greetings/Greetings'

const PORT = 3030
const PROTO_FILE = '../proto/greetings.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const greetingsPackage = grpcObj.greetings

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
    greetingsPackage.Greetings.service, {
      GetGreetings: (call, callback) => {
        const params = call.request
        console.log('received params', params)

        let greeting_message = ""
        if (params.name) {
          const name = params.name.split(' ')
          const firstName = name.shift() || ''
          const lastName = name.join(' ')
          const greetings = new HelloServiceImpl(firstName, lastName)

          greeting_message = greetings.showGreeting()
        }

        callback(null, { message: greeting_message })
      }
  } as GreetingsHandlers)

  return server
}

main()
