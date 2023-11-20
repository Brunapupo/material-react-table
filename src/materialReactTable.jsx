import React, { useRef, useState, useEffect, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { makeData } from './makeData';
import logo from './logo.svg';
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import './materialReactTable.css';
import brasao from './brasao.png';

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
      <div className='header'>
        <header className="cabecalho">
          <nav className='cabecalho__menu'>
            <ul>
              <img src={brasao} className='header-logo' alt="brasao" />
              <p className='titulo'> Bruna Dias Pupo<br/> Universidade Federal de Santa Catarina - Ciência da Informação <br/>Trabalho de conclusão da disciplina Gestão da informação</p>
            </ul>
          </nav>
        </header>
      </div>

      <div className='titulo__tabela'>
        <p className='titulo__logo'> Material React Table</p>
        <img src={logo} className='App-logo' alt="logo" />
      </div>
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