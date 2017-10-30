declare module '*.svg' {
  const content: any;
  export default content;
}

interface Store<S> {
  firebaseAuthIsReady: Promise<any>;
}

type Action = 'PUSH' | 'POP' | 'REPLACE';
type UnregisterCallback = () => void;

declare namespace History {
  type LocationListener = (location: Location, action: Action) => void;
}

interface History {
  listenBefore(listener: History.LocationListener): UnregisterCallback;
}
