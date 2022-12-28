// Original file: proto/counter.proto

import type { Response as _counter_Response, Response__Output as _counter_Response__Output } from '../counter/Response';

export interface Greeting {
  'response'?: (_counter_Response | null);
  'message'?: (string);
}

export interface Greeting__Output {
  'response'?: (_counter_Response__Output);
  'message'?: (string);
}
