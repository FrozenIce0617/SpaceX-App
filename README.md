# SpaceX App

This is the simple application that lists information about SpaceX rocket launches using free open SpaceX api

## Features
- Lists recent 50 launches on home page
- Sortable by launch name, date, etc
- Able to search by launch name
- View rocket details when click view details button of the launch
  
## Topic
- My own `Mini Redux` for state management with context api
- [SpaceX api](https://docs.spacexdata.com/)
- [Ag-Grid-React](https://www.ag-grid.com/react-data-grid/) for data table component
- [Material-UI](https://v4.mui.com/) for ui components
- Unit test with context provider

## Dependencies
- `react: "^17.0.2"`
- `typescript: "^4.0.1"`
- `@testing-library/react: "^11.1.0"`
- `ag-grid-react: "^26.2.0"`
- `@material-ui/core": "^4.12.3"`
- `@mui/material": "^5.2.3"`

## ToDo
- Responsive design
- More unit tests

## How to use
1. Clone the repo in your local
    ``` 
    git clone https://github.com/FrozenIce0617/SpaceX-App.git
    ```

2. This project is bootstrapped by `create-react-app`
    
    in the root directory
    ```
    yarn or yarn install
    ```
    ```
    yarn start
    ```

3. Run to unit test
    ```
    yarn test
    ```
