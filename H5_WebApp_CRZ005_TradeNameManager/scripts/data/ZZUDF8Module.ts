module h5.application {
    export interface IZZUDF8Module {
        
        reload: boolean;
        transactionStatus: {
            //itemMasterList: boolean;
            ZZUDF8List : boolean,
            ZZUDF8Record : boolean,
          //  ZZUDF8ColumnNamesRecord : boolean;//for column names
            
        };
      
        
         ZZUDF8List: any; //list of table names
        ZZUDF8ListGrid: IUIGrid;
        
        selectedZZUDF8ListRow: any;
         ZZUDF8Record: any;
        loadZZUDF8RecordModule: any //the function that will be called when a selection is made
        //  ZZUDF8ColumnNamesRecord: any;// for column names
    }
}