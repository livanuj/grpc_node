import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CounterClient as _counter_CounterClient, CounterDefinition as _counter_CounterDefinition } from './counter/Counter';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  counter: {
    Count: MessageTypeDefinition
    Counter: SubtypeConstructor<typeof grpc.Client, _counter_CounterClient> & { service: _counter_CounterDefinition }
    CounterResponse: MessageTypeDefinition
    Empty: MessageTypeDefinition
  }
}

