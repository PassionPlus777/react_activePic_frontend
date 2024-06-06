import { SetStateAction } from "react";
import type { GetProp, UploadProps } from "antd";

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role?: ("user" | "photographer" | "eventManager" | "admin") | null;
  enteredRaces?: (string | Race)[] | null;
  ownedRaces?: (string | Race)[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "races".
 */
export interface Race {
  id?: string;
  name?: string;
  date?: string;
  location?: string | null;
  description?: string | null;
  imageProcessingStrategy?:
    | ("default" | "visionExpertAruco" | "andriiAruco")
    | null;
  images?: (string | Media)[] | null;
  galleryConfig?: {
    eventLogo?: (string | null) | SiteAsset;
    headerBackgroundImage?: (string | null) | SiteAsset;
    adsConfig?: {
      topAdBanner?: {
        enabled?: boolean | null;
        target?: string | null;
        backgroundImage?: (string | null) | SiteAsset;
      };
      bottomAdBanner?: {
        enabled?: boolean | null;
        target?: string | null;
        backgroundImage?: (string | null) | SiteAsset;
      };
    };
    overlayConfig?: {
      enabled?: boolean | null;
      overlay?: (string | null) | SiteAsset;
      overlayPortrait?: (string | null) | SiteAsset;
    };
  };
  racerData?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  stats?: {
    viewedGalleries?:
      | {
          participantID?: string | null;
          views?: number | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  status?: ("new" | "pending" | "processing" | "processed" | "failed") | null;
  detectedCodes?:
    | {
        code?: string | null;
        id?: string | null;
      }[]
    | null;
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  associatedAssets?: {
    overlayedFullsize?: (string | null) | SiteAsset;
  };
  stats?: {
    views?: {
      thumbnail?: number | null;
      enlarged?: number | null;
    };
  };
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    tiny?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "siteAssets".
 */
export interface SiteAsset {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    tiny?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    thumbnail_portrait?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    large?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    large_portrait?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "imageProcessingSystemStatus".
 */
export interface ImageProcessingSystemStatus {
  id: string;
  lastHeartbeat?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

export interface SignInData {
  email?: string;
  password?: string;
  remember?: string;
}

export interface SignUpData {
  firstName?: string;
  surName?: string;
  email?: string;
  password?: string;
  cPassword?: string;
}

export interface SignInFunc {
  dispatchSignIn: CallableFunction;
}

export interface SignUpFunc {
  dispatchSignUp: CallableFunction;
}

export interface MessageData {
  datetime: number;
  type: "info" | "success" | "error";
  content: string;
}

export interface ConfigData {
  mobileStauts: boolean;
}

export interface HomeSlice {
  docs: any[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: unknown;
  nextPage: number;
}

export interface EventData {
  name?: string;
  location?: string;
  date?: string;
  description?: string;
}

export interface TabsProps {
  setEventData: SetStateAction<Race>;
  setKey: SetStateAction<string>;
}

export interface ContentHeaderProps {
  dispatchSetMobileStatus: CallableFunction;
}

export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
