export interface GetUsersRequest {
  limitstart?: number;
  limitnum?: number;
  sorting?: string;
  search?: string;
}

export interface GetUsersResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  users: [];
}
