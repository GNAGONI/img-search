enum NotificationKind { 
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  NULL = ''
}

type NotificationData = { 
  message: string;
}

type NotificationState = {
  open: boolean;
  kind: NotificationKind;
} & NotificationData;

export { NotificationKind };
export type {
  NotificationState,
  NotificationData,
};
