import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { InventoryNumberGet200Response } from '../models/InventoryNumberGet200Response';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiInventoryNumberGetRequest {
    /**
     * The inventory number of the item
     * @type any
     * @memberof DefaultApiinventoryNumberGet
     */
    inventoryNumber: any
}

export interface DefaultApiRootGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the data of the item with the passed inventory number
     * Single item
     * @param param the request object
     */
    public inventoryNumberGet(param: DefaultApiInventoryNumberGetRequest, options?: Configuration): Promise<InventoryNumberGet200Response> {
        return this.api.inventoryNumberGet(param.inventoryNumber,  options).toPromise();
    }

    /**
     * Returns a list of all items
     * @param param the request object
     */
    public rootGet(param: DefaultApiRootGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.rootGet( options).toPromise();
    }

}
