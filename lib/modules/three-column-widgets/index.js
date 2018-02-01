module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Three Column Layout',     
  addFields: [
    {
      name: 'areaLeft',
      type: 'area',
      label: 'Left Area',
    },
    {
      name: 'areaCenter',
      type: 'area',
      label: 'Center Area',
    },
    {
      name: 'areaRight',
      type: 'area',
      label: 'Right Area',
    }
  ]       
};