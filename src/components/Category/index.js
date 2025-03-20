// // src/components/CategoryForm.js
// "use client";
// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Typography, Paper, Box } from '@mui/material';
// import { createCategoryAction, deleteCategoryAction, fetchCategoriesAction } from '@/store/slices/BlogSlice';

// const CategoryForm = () => {
//   const dispatch = useDispatch();
//   const { categories, status, error } = useSelector((state) => state.categories);
//   const { register, handleSubmit, reset } = useForm();

//   // Fetch categories when the component is mounted
//   useEffect(() => {
//     dispatch(fetchCategoriesAction());
//   }, [dispatch]);

//   // Handle category creation
//   const handleCreateCategory = async (data) => {
//     dispatch(createCategoryAction(data.categoryName));
//     reset();
//   };

//   // Handle category deletion
//   const handleDeleteCategory = (categoryId) => {
//     dispatch(deleteCategoryAction(categoryId));
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Category Management
//         </Typography>

//         {/* Category Creation Form */}
//         <Box component="form" onSubmit={handleSubmit(handleCreateCategory)} sx={{ mb: 3 }}>
//           <TextField
//             label="Category Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             {...register('categoryName', { required: 'Category Name is required' })}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//             disabled={status === 'loading'}
//           >
//             {status === 'loading' ? 'Submitting...' : 'Create Category'}
//           </Button>
//         </Box>

//         {/* Category Deletion */}
//         <Typography variant="h6" gutterBottom>
//           Delete Category
//         </Typography>
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Category</InputLabel>
//           <Select
//             {...register('deleteCategoryAction', { required: 'Please select a category' })}
//             label="Category"
//           >
//             {categories.map((category) => (
//               <MenuItem key={category.id} value={category.id}>
//                 {category.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           onClick={() => handleDeleteCategory(categories.find(c => c.id === control.deleteCategoryAction)?.id)}
//           sx={{ mt: 2 }}
//           disabled={status === 'loading'}
//         >
//           Delete Category
//         </Button>

//         {/* Error Handling */}
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }} variant="body2">
//             Error: {error}
//           </Typography>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default CategoryForm;

// "use client";
// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Typography, Paper, Box } from '@mui/material';
// import { createCategoryAction, deleteCategoryAction, fetchCategoriesAction } from '@/store/slices/BlogSlice';

// export default CategoryForm = () => {
//   const dispatch = useDispatch();
//   const { categories, status, error } = useSelector((state) => state.categories);
//   const { register, handleSubmit, reset, getValues } = useForm();

//   // Fetch categories when the component is mounted
//   useEffect(() => {
//     dispatch(fetchCategoriesAction());
//   }, [dispatch]);

//   // Handle category creation
//   const handleCreateCategory = async (data) => {
//     dispatch(createCategoryAction(data.categoryName));
//     reset();
//   };

//   // Handle category deletion
//   const handleDeleteCategory = () => {
//     const selectedCategoryId = getValues('deleteCategoryAction');
//     if (selectedCategoryId) {
//       dispatch(deleteCategoryAction(selectedCategoryId));
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Category Management
//         </Typography>

//         {/* Category Creation Form */}
//         <Box component="form" onSubmit={handleSubmit(handleCreateCategory)} sx={{ mb: 3 }}>
//           <TextField
//             label="Category Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             {...register('categoryName', { required: 'Category Name is required' })}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//             disabled={status === 'loading'}
//           >
//             {status === 'loading' ? 'Submitting...' : 'Create Category'}
//           </Button>
//         </Box>

//         {/* Category Deletion */}
//         <Typography variant="h6" gutterBottom>
//           Delete Category
//         </Typography>
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Category</InputLabel>
//           <Select
//             {...register('deleteCategoryAction', { required: 'Please select a category' })}
//             label="Category"
//           >
//             {categories.map((category) => (
//               <MenuItem key={category.id} value={category.id}>
//                 {category.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Button
//           variant="contained"
//           color="secondary"
//           fullWidth
//           onClick={handleDeleteCategory}
//           sx={{ mt: 2 }}
//           disabled={status === 'loading'}
//         >
//           Delete Category
//         </Button>

//         {/* Error Handling */}
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }} variant="body2">
//             Error: {error}
//           </Typography>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// // export default CategoryForm;


"use client";
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Typography, Paper, Box } from '@mui/material';
import { createCategoryAction, deleteCategoryAction, fetchCategoriesAction } from '@/store/slices/BlogSlice';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);
  const { register, handleSubmit, reset, getValues } = useForm();

  // Fetch categories when the component is mounted
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  // Handle category creation
  const handleCreateCategory = async (data) => {
    dispatch(createCategoryAction(data.categoryName));
    reset();
  };

  // Handle category deletion
  const handleDeleteCategory = () => {
    const selectedCategoryId = getValues('deleteCategoryAction');
    if (selectedCategoryId) {
      dispatch(deleteCategoryAction(selectedCategoryId)).unwrap().then((res)=>{
        alert("deldetededed")
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Category Management
        </Typography>

        {/* Category Creation Form */}
        <Box component="form" onSubmit={handleSubmit(handleCreateCategory)} sx={{ mb: 3 }}>
          <TextField
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('categoryName', { required: 'Category Name is required' })}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting...' : 'Create Category'}
          </Button>
        </Box>

        {/* Category Deletion */}
        <Typography variant="h6" gutterBottom>
          Delete Category
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            {...register('deleteCategoryAction', { required: 'Please select a category' })}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleDeleteCategory}
          sx={{ mt: 2 }}
          disabled={status === 'loading'}
        >
          Delete Category
        </Button>

        {/* Error Handling */}
        {error && (
          <Typography color="error" sx={{ mt: 2 }} variant="body2">
            Error: {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default CategoryForm;
