import Accessor from '@arcgis/core/core/Accessor';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@subclass('custom.DropDown')
export class DropDown extends Accessor {
  @property()
  featureLayer: FeatureLayer = new FeatureLayer();

  @property({ readOnly: true })
  fieldName1?: string | any;

  @property({ readOnly: true })
  fieldName2?: string | any;

  @property({ readOnly: true })
  fieldName3?: string | any;

  dropDownQuery = () => {
    var query = this.featureLayer.createQuery();
    query.outFields = ['*'];

    const pairs = this.featureLayer.queryFeatures(query).then((response: any) => {
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

      // 2. Unique falues for field1
      const uniqueField1 = pair
        .map((item: any) => item.field1)
        .filter((field1: any, index: any, emp: any) => emp.indexOf(field1) === index);

      // 3. Compile for each field1
      const finalArray = uniqueField1.map((field1: any, index: number) => {
        // 3.1. Unique values for field2 corresponding to field1
        const filterField1 = pair.filter((emp: any) => emp.field1 === field1);
        const uniqueField2 = filterField1
          .map((item: any) => item.field2)
          .filter((field2: any, index: any, emp: any) => emp.indexOf(field2) === index);

        // 3.2. Unique values for field3 corresponding to field1 and field2
        const field2Names = uniqueField2.map((field2: any, index: any) => {
          const filtered = pair.filter(
            (emp: any) => emp.field1 === field1 && emp.field2 === field2,
          );
          const field3s = filtered.map((item: any, index: number) => item.field3);

          // 2.2.2. Check a pair of CP and Company has one type or both types (point and line)
          return Object.assign({
            name: field2,
            field3:
              field3s.length === 1
                ? [{ name: field3s }]
                : [{ name: field3s[0] }, { name: field3s[1] }],
          });
        });

        return Object.assign({
          field1: field1,
          field2: field2Names,
        });
      });
      return finalArray;
    });

    return pairs;
  };
}
