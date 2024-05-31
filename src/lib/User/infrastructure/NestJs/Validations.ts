import { IsEmail, IsString, Length } from 'class-validator';

export class FindOneParams {
  @IsString()
  @Length(5, 255)
  id: string;
}

export class Create {
  @IsString()
  @Length(5, 255)
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class Edit {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
