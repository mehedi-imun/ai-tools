export const pick = (obj, keys) => {
 
    const finalObj = {};
  
    for (const key of keys) {
      if (obj && Object.hasOwnProperty.call(obj, key)) {
        finalObj[key] = obj[key];
      }
    }
    return finalObj;
  };
  export const calculatePagination = (options) => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 10);
    const skip = (page - 1) * limit;
  
    const sortBy = options.sortBy || 'createdAt' ;
    const sortOrder = options.sortOrder || 'desc';
  
    return {
      page,
      limit,
      skip,
      sortBy,
      sortOrder,
    };
  };


  /// ai tools pagination , filter and search rearm constant

  export const toolsFilterableFields = [
    'searchTerm',
    'pricing',
    'price',
    'verified',
    'new',
    'popular',
    'toolsAddedToday',
    'category',
    'subcategories',
    'status'
    
  ];
  export const toolSearchableFields = [
    'title',
    'toolDescription',
    'shortDescription',
    'useCase1',
    'useCase2',
    'useCase3'
  ];