import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, 
    name: 'Folder 1', 
    file: [
      {id: 1, name: "doc.cs", lastupdate: "29-aug-2019", permission: true},
      {id: 2, name: "doc.cs", lastupdate: "29-aug-2019", permission: false},
      {id: 3, name: "doc.cs", lastupdate: "29-aug-2019", permission: false},
      {id: 4, name: "doc.cs", lastupdate: "29-aug-2019", permission: true}

    ] },
    {id: 2, name: 'Folder 2', file: [] },
    {id: 3, name: 'Folder 3', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] },
    {id: 4, name: 'Folder 4', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] },
    {id: 5, name: 'Folder 5', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] },
    {id: 6, name: 'Folder 6', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] },
    { id: 7, name: 'Folder 7', file: [{id: 2, name: "doc.cs", lastupdate: "8-aug-2019", permission: true}] },
    {id: 8, name: 'Folder 8', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: false}] },
    {id: 9, name: 'Folder 9', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: false}] },
    {id: 10, name: 'Folder 10', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] },
    {id: 11, name: 'Folder 11', file: [{id: 1, name: "doc.cs", lastupdate: "9-aug-2019", permission: true}] }
  
];