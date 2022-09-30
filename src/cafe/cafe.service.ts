/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';


@Injectable()
export class CafeService {constructor(
    @InjectRepository(CafeEntity)
    private readonly cafeRepository: Repository<CafeEntity>
){}
  
async create(cafe: CafeEntity): Promise<CafeEntity> {
    if (cafe.price < 0){
        throw new BusinessLogicException("The price of the cofe is less than 0", BusinessError.NOT_FOUND);
    }
    return await this.cafeRepository.save(cafe);
}

}
