// Original file: proto/counter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CounterResponse as _counter_CounterResponse, CounterResponse__Output as _counter_CounterResponse__Output } from '../counter/CounterResponse';
import type { Empty as _counter_Empty, Empty__Output as _counter_Empty__Output } from '../counter/Empty';

export interface CounterClient extends grpc.Client {
  IncrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CounterHandlers extends grpc.UntypedServiceImplementation {
  IncrementCounter: grpc.handleUnaryCall<_counter_Empty__Output, _counter_CounterResponse>;
  
}

export interface CounterDefinition extends grpc.ServiceDefinition {
  IncrementCounter: MethodDefinition<_counter_Empty, _counter_CounterResponse, _counter_Empty__Output, _counter_CounterResponse__Output>
}
