import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PaginateModel, FilterQuery, QueryOptions } from "mongoose";
import { TokenDocument } from "./schema/token.schema";

@Injectable()
export class TokensService {

    constructor(@InjectModel("Token") private tokenModel: PaginateModel<TokenDocument>) {
    }

    async create(token: Partial<TokenDocument>) {
        return await this.tokenModel.create(token);
    }

    async findOne(filter: FilterQuery<TokenDocument>, options?: QueryOptions) {
        return this.tokenModel.findOne(filter, options);
    }

    async deleteOne(filter: FilterQuery<TokenDocument>, options?: QueryOptions) {
        return this.tokenModel.findOneAndDelete(filter, options);
    }

    async count(filter: FilterQuery<TokenDocument>) {
        return this.tokenModel.countDocuments(filter);
    }
}