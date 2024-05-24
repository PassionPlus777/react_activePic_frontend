import {
  // ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { baseAPIUrl } from "@/config";
import { request } from "@/utils";

import { showMessage } from "./messageSlice";
import { Race } from "@/types";
import { getMe } from "./authSlice";

// Define the initial state using that type
const initialState: Race = {
  id: "",
  name: "",
  date: "",
  location: "",
  description: "",
  imageProcessingStrategy: "default",
  images: [],
  galleryConfig: {
    eventLogo: "",
    headerBackgroundImage: "",
    adsConfig: {
      topAdBanner: {
        enabled: false,
        target: "",
        backgroundImage: "",
      },
      bottomAdBanner: {
        enabled: false,
        target: "",
        backgroundImage: "",
      },
    },
    overlayConfig: {
      enabled: false,
      overlay: "",
      overlayPortrait: "",
    },
  },
  racerData: [],
  stats: {
    viewedGalleries: [],
  },
  updatedAt: "",
  createdAt: "",
};

const uploadAsset = async (fileObject: any) => {
  const formData = new FormData();
  formData.append("file", fileObject.originFileObj);

  const res = await fetch(`${baseAPIUrl}/siteAssets`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload asset");
  }

  const resJson = await res.json();
  return resJson.doc.id;
};

export const createRace = createAsyncThunk<any, any, { rejectValue: string }>(
  "races",
  async ({ data, navigate, id, ownedRaces }, { dispatch, rejectWithValue }) => {
    try {
      if (
        Array.isArray(data.galleryConfig.eventLogo) &&
        data.galleryConfig.eventLogo.length
      ) {
        data.galleryConfig.eventLogo = await uploadAsset(
          data.galleryConfig.eventLogo[0].originFileObj
        );
      }

      if (
        Array.isArray(data.galleryConfig.headerBackgroundImage) &&
        data.galleryConfig.headerBackgroundImage.length
      ) {
        data.galleryConfig.headerBackgroundImage = await uploadAsset(
          data.galleryConfig.headerBackgroundImage[0].originFileObj
        );
      }

      if (
        Array.isArray(
          data.galleryConfig.adsConfig.topAdBanner.backgroundImage
        ) &&
        data.galleryConfig.adsConfig.topAdBanner.backgroundImage.length
      ) {
        data.galleryConfig.adsConfig.topAdBanner.backgroundImage =
          await uploadAsset(
            data.galleryConfig.adsConfig.topAdBanner.backgroundImage[0]
              .originFileObj
          );
      }

      if (
        Array.isArray(
          data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage
        ) &&
        data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage.length
      ) {
        data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage =
          await uploadAsset(
            data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage[0]
              .originFileObj
          );
      }

      if (
        Array.isArray(data.galleryConfig.overlayConfig.overlay) &&
        data.galleryConfig.overlayConfig.overlay.length
      ) {
        data.galleryConfig.overlayConfig.overlay = await uploadAsset(
          data.galleryConfig.overlayConfig.overlay[0].originFileObj
        );
      }

      if (
        Array.isArray(data.galleryConfig.overlayConfig.overlayPortrait) &&
        data.galleryConfig.overlayConfig.overlayPortrait.length
      ) {
        data.galleryConfig.overlayConfig.overlayPortrait = await uploadAsset(
          data.galleryConfig.overlayConfig.overlayPortrait[0].originFileObj
        );
      }

      // if (Array.isArray(data.images) && data.images.length) {
      //   const formData = new FormData();

      //   data.images.forEach((item: any, index: number) => {
      //     data.images.length === index + 1
      //       ? formData.append(`file[${index}]`, item.originFileObj)
      //       : formData.append(`file[${index}]`, item);
      //   });
      //   const res = await fetch(`${baseAPIUrl}/media`, {
      //     method: "POST",
      //     body: formData,
      //   });

      //   const resJson = await res.json();
      //   console.log(resJson);

      //   data.images = resJson.doc.id;
      // }

      const res = await request({
        url: "/races",
        method: "POST",
        data: data,
        auth: true,
      });

      await request({
        url: `/users/${id}`,
        method: "PATCH",
        data: { ownedRaces: [...ownedRaces, res.data.doc.id] },
        auth: true,
      });

      dispatch(getMe());

      dispatch(
        showMessage({
          datetime: Date.now(),
          type: "success",
          content: res.data.message,
        })
      );

      navigate("/home");

      return res.data.doc; // Explicitly return true
    } catch (error: any) {
      return rejectWithValue("Creatw=e faild"); // Reject with value (you can customize the error message)
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<Race>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.location = action.payload.location;
      state.date = action.payload.date;
      state.description = action.payload.description;
      state.imageProcessingStrategy = action.payload.imageProcessingStrategy;
      state.images = action.payload.images;
      state.galleryConfig = action.payload.galleryConfig;
      state.racerData = action.payload.racerData;
      state.stats = action.payload.stats;
      state.updatedAt = action.payload.updatedAt;
      state.createdAt = action.payload.createdAt;
    },
  },
  // extraReducers: (builder: ActionReducerMapBuilder<Race>) => {
  //   builder.addCase(
  //     createRace.fulfilled,
  //     (state, action: PayloadAction<any>) => {
  //       state.id = action.payload.id;
  //       state.name = action.payload.name;
  //       state.location = action.payload.location;
  //       state.date = action.payload.date;
  //       state.description = action.payload.description;
  //       state.imageProcessingStrategy = action.payload.imageProcessingStrategy;
  //       state.images = action.payload.images;
  //       state.galleryConfig = action.payload.galleryConfig;
  //       state.racerData = action.payload.racerData;
  //       state.stats = action.payload.stats;
  //       state.updatedAt = action.payload.updatedAt;
  //       state.createdAt = action.payload.createdAt;
  //     }
  //   );
  // },
});

export default eventSlice.reducer;
