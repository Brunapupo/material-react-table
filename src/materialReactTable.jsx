import React, { useRef, useState, useEffect, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { makeData } from './makeData';
import logo from './logo.svg';
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";

const Example = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
        size: 150,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
        size: 300,
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'country',
        header: 'Country',
      },
    ],
    [],
    //end
  );

  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(makeData(300));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  return (
   <div>
    <img src={logo} className="App-logo" alt="logo" />
      <p>
        Tabela Simples
        <div>
        Material React Table
        </div>
        <div>
          
        </div>
      </p>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnResizing
        enableBottomToolbar={false}
        enablePagination={false}
        enableGlobalFilterModes={true}
        enableRowNumbers={true}
        enablePinning
        enableRowVirtualization={true}
        muiTableContainerProps={{ sx: { maxHeight: "700px" } }}
        localization={MRT_Localization_PT_BR}
        rowVirtualizerProps={{ overscan: 8 }}
      />
    </div>
  );
};

export default Example;