import { ApiProperty } from '@nestjs/swagger';

export class CreateAgencyDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ default: 'PENDING' })
  status: 'PENDING';

  @ApiProperty()
  createdBy: string;
}
