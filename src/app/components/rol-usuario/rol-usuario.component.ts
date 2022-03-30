import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface PermissionNode {
  name: string;
  children?: PermissionNode[];
}

const TREE_DATA: PermissionNode[] = [
  {
    name: 'Robo y abuso de confianza',
    children: [
      { name: 'Alta' },
      { name: 'Modificación' },
      { name: 'Cancelación' },
    ],
  },
  {
    name: 'Localización',
    children: [
      { name: 'Alta' },
      { name: 'Modificación' },
      { name: 'Cancelación' },
      { name: 'Cancelación' },
    ],
  },
  {
    name: 'Administración',
    children: [
      { name: 'Alta' },
      { name: 'Modificación' },
      { name: 'Cancelación' },
      { name: 'Cancelación' },
      { name: 'Cancelación' },
    ],
  },
];

/** Flat node with expandable and level information */
interface PermissionFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  selectedItems: number;
}

@Component({
  selector: 'app-rol-usuario',
  templateUrl: './rol-usuario.component.html',
  styleUrls: ['./rol-usuario.component.scss'],
})
export class RolUsuarioComponent implements OnInit {
  private _transformer = (node: PermissionNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      selectedItems: 0,
    };
  };

  treeControl: FlatTreeControl<PermissionFlatNode>;

  treeFlattener: MatTreeFlattener<PermissionNode, PermissionFlatNode>;

  dataSource: MatTreeFlatDataSource<PermissionNode, PermissionFlatNode>;

  checklistSelection = new SelectionModel<PermissionFlatNode>(
    true /* multiple */
  );

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.dataSource.data = TREE_DATA;

    console.log('treeControl :>> ', this.treeControl);
  }

  ngOnInit(): void {}

  getLevel = (node: PermissionFlatNode) => node.level;

  isExpandable = (node: PermissionFlatNode) => node.expandable;

  getChildren = (node: PermissionNode): PermissionNode[] => node.children || [];

  hasChild = (_: number, node: PermissionFlatNode) => node.expandable;

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: PermissionFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }
  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: PermissionFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: PermissionFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);

    this.checkboxValues(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: PermissionFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);

    this.checkboxValues(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: PermissionFlatNode): void {
    let parent: PermissionFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkboxValues(node: PermissionFlatNode): void {
    if (node.level == 0) {
      const descendant = this.treeControl.getDescendants(node);

      const variable = descendant.filter((data) =>
        this.checklistSelection.isSelected(data)
      );

      node.selectedItems = variable.length;
    }
    if (node.level == 1) {
      const parent = this.getParentNode(node);
      if (parent) {
        if (this.checklistSelection.isSelected(node)) {
          parent.selectedItems = parent.selectedItems + 1;
        } else {
          parent.selectedItems = parent.selectedItems - 1;

          if (parent.selectedItems < 0) {
            parent.selectedItems = 0;
          }
        }
      }
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: PermissionFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every((child) => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: PermissionFlatNode): PermissionFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
