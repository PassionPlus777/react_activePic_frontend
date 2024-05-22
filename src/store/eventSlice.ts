import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

// import { fetchAllEvents } from "@/store/homeSlice";

import { baseAPIUrl } from "@/config";
import { request } from "@/utils";

import { showMessage } from "./messageSlice";
import { Race } from "@/types";

// Define the initial state using that type
const initialState: Race = {
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

export const createRace = createAsyncThunk<any, any, { rejectValue: string }>(
  "races",
  async ({ data, navigate, id, ownedRaces }, { dispatch, rejectWithValue }) => {
    try {
      if (
        Array.isArray(data.galleryConfig.eventLogo) &&
        data.galleryConfig.eventLogo.length
      ) {
        const formData = new FormData();

        formData.append("file", data.galleryConfig.eventLogo[0].originFileObj);

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.eventLogo = resJson.doc.id;
      }

      if (
        Array.isArray(data.galleryConfig.headerBackgroundImage) &&
        data.galleryConfig.headerBackgroundImage.length
      ) {
        const formData = new FormData();

        formData.append(
          "file",
          data.galleryConfig.headerBackgroundImage[0].originFileObj
        );

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.headerBackgroundImage = resJson.doc.id;
      }

      if (
        Array.isArray(
          data.galleryConfig.adsConfig.topAdBanner.backgroundImage
        ) &&
        data.galleryConfig.adsConfig.topAdBanner.backgroundImage
      ) {
        const formData = new FormData();

        formData.append(
          "file",
          data.galleryConfig.adsConfig.topAdBanner.backgroundImage[0]
            .originFileObj
        );

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.adsConfig.topAdBanner.backgroundImage =
          resJson.doc.id;
      }

      if (
        Array.isArray(
          data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage
        ) &&
        data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage
      ) {
        const formData = new FormData();

        formData.append(
          "file",
          data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage[0]
            .originFileObj
        );

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.adsConfig.bottomAdBanner.backgroundImage =
          resJson.doc.id;
      }

      if (
        Array.isArray(data.galleryConfig.overlayConfig.overlay) &&
        data.galleryConfig.overlayConfig.overlay.length
      ) {
        const formData = new FormData();

        formData.append(
          "file",
          data.galleryConfig.overlayConfig.overlay[0].originFileObj
        );

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.overlayConfig.overlay = resJson.doc.id;
      }

      if (
        Array.isArray(data.galleryConfig.overlayConfig.overlayPortrait) &&
        data.galleryConfig.overlayConfig.overlayPortrait.length
      ) {
        const formData = new FormData();

        formData.append(
          "file",
          data.galleryConfig.overlayConfig.overlayPortrait[0].originFileObj
        );

        const res = await fetch(`${baseAPIUrl}/siteAssets`, {
          method: "POST",
          body: formData,
        });

        const resJson = await res.json();
        data.galleryConfig.overlayConfig.overlayPortrait = resJson.doc.id;
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

      const res = await request({ url: "/races", method: "POST", data: data });

      await request({
        url: `/users/${id}`,
        method: "PATCH",
        data: { ownedRaces: [...ownedRaces, res.data.doc.id] },
      });

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
      return rejectWithValue("Login faild"); // Reject with value (you can customize the error message)
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Race>) => {
    builder.addCase(
      createRace.fulfilled,
      (state, action: PayloadAction<any>) => {
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
        state.updatedAt = action.payload.images;
        state.createdAt = action.payload.createdAt;
      }
    );
  },
});

export default eventSlice.reducer;
