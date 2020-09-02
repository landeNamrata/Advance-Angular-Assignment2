import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Car',
    children: [
      { name: 'BMW' },
      { name: 'Porsche' },
      { name: 'Audi' },
    ]
  }, {
    name: 'Bikes',
    children: [
      {
        name: 'Honda',
        children: [
          { name: 'Activa' },
          { name: 'Deo' },
        ]
      }, {
        name: 'Bajaj',
        children: [
          { name: 'Discover' },
          { name: 'Avenger' },
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-hierarchicalstructue',
  templateUrl: './hierarchicalstructue.component.html',
  styleUrls: ['./hierarchicalstructue.component.css']
})
export class HierarchicalstructueComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() { this.dataSource.data = TREE_DATA; }

  ngOnInit(): void {
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}