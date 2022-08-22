import { ApiProperty } from '@nestjs/swagger';

export class loginUser {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
