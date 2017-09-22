/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

type IArticle = any;
type ISlide = { src: string; title: string; };

interface IToast {
  id?: number;
  status?: 'danger' | 'warning' | 'success';
  title?: string;
  message?: string;
}
