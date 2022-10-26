// Original file: proto/counter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Count as _counter_Count, Count__Output as _counter_Count__Output } from '../counter/Count';
import type { CounterResponse as _counter_CounterResponse, CounterResponse__Output as _counter_CounterResponse__Output } from '../counter/CounterResponse';
import type { Empty as _counter_Empty, Empty__Output as _counter_Empty__Output } from '../counter/Empty';

export interface CounterClient extends grpc.Client {
  GetCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  GetCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  GetCounterValue(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  GetCounterValue(argument: _counter_Empty, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  getCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  getCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  getCounterValue(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  getCounterValue(argument: _counter_Empty, callback: grpc.requestCallback<_counter_Count__Output>): grpc.ClientUnaryCall;
  
  IncrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  IncrementCounter(argument: _counter_Empty, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  incrementCounter(argument: _counter_Empty, callback: grpc.requestCallback<_counter_CounterResponse__Output>): grpc.ClientUnaryCall;
  
  PrintCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  PrintCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  PrintCounterValue(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  PrintCounterValue(argument: _counter_Empty, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  printCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  printCounterValue(argument: _counter_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  printCounterValue(argument: _counter_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  printCounterValue(argument: _counter_Empty, callback: grpc.requestCallback<_counter_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface CounterHandlers extends grpc.UntypedServiceImplementation {
  GetCounterValue: grpc.handleUnaryCall<_counter_Empty__Output, _counter_Count>;
  
  IncrementCounter: grpc.handleUnaryCall<_counter_Empty__Output, _counter_CounterResponse>;
  
  PrintCounterValue: grpc.handleUnaryCall<_counter_Empty__Output, _counter_Empty>;
  
}

export interface CounterDefinition extends grpc.ServiceDefinition {
  GetCounterValue: MethodDefinition<_counter_Empty, _counter_Count, _counter_Empty__Output, _counter_Count__Output>
  IncrementCounter: MethodDefinition<_counter_Empty, _counter_CounterResponse, _counter_Empty__Output, _counter_CounterResponse__Output>
  PrintCounterValue: MethodDefinition<_counter_Empty, _counter_Empty, _counter_Empty__Output, _counter_Empty__Output>
}
