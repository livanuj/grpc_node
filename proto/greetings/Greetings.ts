// Original file: proto/greetings.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Greeting as _greetings_Greeting, Greeting__Output as _greetings_Greeting__Output } from '../greetings/Greeting';
import type { Name as _greetings_Name, Name__Output as _greetings_Name__Output } from '../greetings/Name';

export interface GreetingsClient extends grpc.Client {
  GetGreetings(argument: _greetings_Name, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _greetings_Name, metadata: grpc.Metadata, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _greetings_Name, options: grpc.CallOptions, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _greetings_Name, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _greetings_Name, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _greetings_Name, metadata: grpc.Metadata, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _greetings_Name, options: grpc.CallOptions, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _greetings_Name, callback: grpc.requestCallback<_greetings_Greeting__Output>): grpc.ClientUnaryCall;
  
}

export interface GreetingsHandlers extends grpc.UntypedServiceImplementation {
  GetGreetings: grpc.handleUnaryCall<_greetings_Name__Output, _greetings_Greeting>;
  
}

export interface GreetingsDefinition extends grpc.ServiceDefinition {
  GetGreetings: MethodDefinition<_greetings_Name, _greetings_Greeting, _greetings_Name__Output, _greetings_Greeting__Output>
}
