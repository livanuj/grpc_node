// Original file: proto/greetings.proto

import type { Response as _greetings_Response, Response__Output as _greetings_Response__Output } from '../greetings/Response';

export interface Greeting {
  'response'?: (_greetings_Response | null);
  'message'?: (string);
}

export interface Greeting__Output {
  'response'?: (_greetings_Response__Output);
  'message'?: (string);
}
