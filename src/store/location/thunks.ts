// import { createAsyncThunk } from '@reduxjs/toolkit';
// import type { IServerCharacter } from '../../types/api-types/api-types';
// import type { AppDispatch, RootState } from '../store';
// import type { ICharacter } from '../../types/data-types/data-types';
// import { api } from '../../api/api';
// import { adaptCharacterToClient } from '../../adapter/api-adapter';

// const fetchCharacter = createAsyncThunk<ICharacter, string, {
//   dispatch: AppDispatch,
//   state: RootState,
// }>(
//   'data/character',
//   async (id: string) => {
//     // add enums route to avoid direct assignment
//     const response = await api.get<IServerCharacter>(`character/${id}`);
//     const { data } = response;
//     return adaptCharacterToClient(data);
//   },
// );

// export { fetchCharacter };
