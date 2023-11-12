import Accessor from '@arcgis/core/core/Accessor';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@subclass('custom.DropDownData')
export class DropDownData extends Accessor {
  @property()
  featureLayer1: FeatureLayer = new FeatureLayer();

  @property()
  featureLayer2: FeatureLayer = new FeatureLayer();

  @property({ readOnly: true })
  fieldName1?: string | any;

  @property({ readOnly: true })
  fieldName2?: string | any;

  @property({ readOnly: true })
  fieldName3?: string | any;

  dropDownQuery = async () => {
    if (this.fieldName2 === undefined && this.fieldName3 === undefined) {
      console.log('Only one dropdown list');
    } else if (this.fieldName3 === undefined) {
      console.log('Two dropdown lists');
    } else {
      // 1. Pairs for 1st feature layer
      var query = this.featureLayer1.createQuery();
      query.outFields = ['*'];
      query.orderByFields = [this.fieldName1, this.fieldName2];
      query.groupByFieldsForStatistics = [this.fieldName1, this.fieldName2];

      const pairQ: any = this.featureLayer1.queryFeatures(query).then((response: any) => {
        var stats = response.features;
        const values = stats.map((result: any, index: any) => {
          const attributes = result.attributes;
          const field1 = attributes[this.fieldName1];
          const field2 = attributes[this.fieldName2];
          const field3 = attributes[this.fieldName3];
          return Object.assign({
            field1: field1,
            field2: field2,
            field3: field3,
          });
        });

        // 1. Get a pair
        const pair = values.filter(
          (val: any, index: any) =>
            values.findIndex(
              (item: any) =>
                item.field1 === val.field1 &&
                item.field2 === val.field2 &&
                item.field3 === val.field3,
            ) === index,
        );
        return pair;
      });

      // 2. Pairs for 2nd feature layer
      var query2 = this.featureLayer2.createQuery();
      query2.outFields = ['*'];

      const pairQ2: any = this.featureLayer2.queryFeatures(query2).then((response: any) => {
        var stats = response.features;
        const values = stats.map((result: any, index: any) => {
          const attributes = result.attributes;
          const field1 = attributes[this.fieldName1];
          const field2 = attributes[this.fieldName2];
          const field3 = attributes[this.fieldName3];
          return Object.assign({
            field1: field1,
            field2: field2,
            field3: field3,
          });
        });

        // 1. Get a pair
        const pair = values.filter(
          (val: any, index: any) =>
            values.findIndex(
              (item: any) =>
                item.field1 === val.field1 &&
                item.field2 === val.field2 &&
                item.field3 === val.field3,
            ) === index,
        );
        return pair;
      });

      // 3. Concatenate two pairs
      const pair1 = await pairQ;
      const pair2 = await pairQ2;
      const pairs = pair1.concat(pair2);

      // 2. Unique falues for field1
      const uniqueField1 = pairs
        .map((item: any) => item.field1)
        .filter((field1: any, index: any, emp: any) => emp.indexOf(field1) === index);

      // 3. Compile for all the fields:
      const field1Array = uniqueField1.map((field1: any, index: number) => {
        const filterField1 = pairs.filter((emp: any) => emp.field1 === field1);
        const uniqueField2 = filterField1
          .map((item: any) => item.field2)
          .filter((field2: any, index: any, emp: any) => emp.indexOf(field2) === index);

        // 3.2. Unique values for field3 corresponding to field1 and field2
        // eslint-disable-next-line array-callback-return
        const field2Array = uniqueField2.map((field2: any, index: any) => {
          const filterField2 = pairs.filter(
            (emp: any) => emp.field1 === field1 && emp.field2 === field2,
          );

          const uniqueField3 = filterField2
            .map((item: any) => item.field3)
            .filter((field3: any, index: any, emp: any) => emp.indexOf(field3) === index);

          // eslint-disable-next-line array-callback-return
          const field3Array = uniqueField3.map((field3: any, index: any) => {
            return Object.assign({
              typeName: field3, // field3 = typeName (name?)
            });
          });

          return Object.assign({
            name: field2,
            type: field3Array, // field3 = type
          });
        });
        return Object.assign({
          cp: field1, // field1 = cp
          company: field2Array, // field2 = company
        });
      });
      return field1Array;
    }
  }; // end of dropdown method
}
