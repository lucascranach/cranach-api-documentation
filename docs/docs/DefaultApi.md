# DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inventoryNumberGet**](DefaultApi.md#inventoryNumberGet) | **GET** /{inventory_number} | Single item
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | 


<a name="inventoryNumberGet"></a>
# **inventoryNumberGet**
> inventoryNumberGet(inventoryNumber)

Single item

Returns the data of the item with the passed inventory number

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val inventoryNumber : kotlin.Any =  // kotlin.Any | The inventory number of the item
try {
    apiInstance.inventoryNumberGet(inventoryNumber)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#inventoryNumberGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#inventoryNumberGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryNumber** | [**kotlin.Any**](.md)| The inventory number of the item |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rootGet"></a>
# **rootGet**
> rootGet()



Returns a list of all items

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    apiInstance.rootGet()
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#rootGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#rootGet")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

