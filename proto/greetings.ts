import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreetingsClient as _greetings_GreetingsClient, GreetingsDefinition as _greetings_GreetingsDefinition } from './greetings/Greetings';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  greetings: {
    Greeting: MessageTypeDefinition
    Greetings: SubtypeConstructor<typeof grpc.Client, _greetings_GreetingsClient> & { service: _greetings_GreetingsDefinition }
    Name: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

