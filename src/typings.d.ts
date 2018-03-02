/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IToast {
  id?: number;
  status?: 'danger' | 'warning' | 'success';
  title?: string;
  message?: string;
}
