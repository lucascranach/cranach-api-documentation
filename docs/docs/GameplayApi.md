# TicTacToe.GameplayApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBoard**](GameplayApi.md#getBoard) | **GET** /board | Get the whole board
[**getSquare**](GameplayApi.md#getSquare) | **GET** /board/{row}/{column} | Get a single board square
[**putSquare**](GameplayApi.md#putSquare) | **PUT** /board/{row}/{column} | Set a single board square



## getBoard

> Status getBoard()

Get the whole board

Retrieves the current state of the board and the winner.

### Example

```javascript
import TicTacToe from 'tic_tac_toe';

let apiInstance = new TicTacToe.GameplayApi();
apiInstance.getBoard((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSquare

> Mark getSquare(row, column)

Get a single board square

Retrieves the requested square.

### Example

```javascript
import TicTacToe from 'tic_tac_toe';

let apiInstance = new TicTacToe.GameplayApi();
let row = null; // Object | Board row (vertical coordinate)
let column = null; // Object | Board column (horizontal coordinate)
apiInstance.getSquare(row, column, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **row** | [**Object**](.md)| Board row (vertical coordinate) | 
 **column** | [**Object**](.md)| Board column (horizontal coordinate) | 

### Return type

[**Mark**](Mark.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html


## putSquare

> Status putSquare(row, column, body)

Set a single board square

Places a mark on the board and retrieves the whole board and the winner (if any).

### Example

```javascript
import TicTacToe from 'tic_tac_toe';

let apiInstance = new TicTacToe.GameplayApi();
let row = null; // Object | Board row (vertical coordinate)
let column = null; // Object | Board column (horizontal coordinate)
let body = null; // Object | 
apiInstance.putSquare(row, column, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **row** | [**Object**](.md)| Board row (vertical coordinate) | 
 **column** | [**Object**](.md)| Board column (horizontal coordinate) | 
 **body** | **Object**|  | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

