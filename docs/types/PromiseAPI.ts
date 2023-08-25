import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { InventoryNumberGet200Response } from '../models/InventoryNumberGet200Response';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the data of the item with the passed inventory number
     * Single item
     * @param inventoryNumber The inventory number of the item
     */
    public inventoryNumberGet(inventoryNumber: any, _options?: Configuration): Promise<InventoryNumberGet200Response> {
        const result = this.api.inventoryNumberGet(inventoryNumber, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all items
     */
    public rootGet(_options?: Configuration): Promise<void> {
        const result = this.api.rootGet(_options);
        return result.toPromise();
    }


}



