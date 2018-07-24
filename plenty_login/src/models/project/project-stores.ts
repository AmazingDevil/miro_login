export class pltProjectStoreItem {
    Guid: string;// GUID used for calling this store
    StoreId: string; // ID of the store
    Status: { // Store status  
        Id: number, // Id of status 
        Name: string; // Name that maps to id
    };
    Employee: { // Employee
        Guid: string; // Employee GUID used for calling this employee
        Name: string; // Employee name
    }

}