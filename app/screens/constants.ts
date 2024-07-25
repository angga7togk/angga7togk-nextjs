export interface ScreenProps {
  active: boolean;
  onChangeScreen?: (screen: string) => void;
}

export interface TabProps {
  active: boolean;
  onChangeTab?: (tab: string) => void;
}
