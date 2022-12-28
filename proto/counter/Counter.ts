// Original file: proto/counter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Greeting as _counter_Greeting, Greeting__Output as _counter_Greeting__Output } from '../counter/Greeting';
import type { Name as _counter_Name, Name__Output as _counter_Name__Output } from '../counter/Name';

export interface CounterClient extends grpc.Client {
  GetGreetings(argument: _counter_Name, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _counter_Name, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _counter_Name, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreetings(argument: _counter_Name, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _counter_Name, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _counter_Name, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _counter_Name, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  getGreetings(argument: _counter_Name, callback: grpc.requestCallback<_counter_Greeting__Output>): grpc.ClientUnaryCall;
  
}

export interface CounterHandlers extends grpc.UntypedServiceImplementation {
  GetGreetings: grpc.handleUnaryCall<_counter_Name__Output, _counter_Greeting>;
  
}

export interface CounterDefinition extends grpc.ServiceDefinition {
  GetGreetings: MethodDefinition<_counter_Name, _counter_Greeting, _counter_Name__Output, _counter_Greeting__Output>
}
