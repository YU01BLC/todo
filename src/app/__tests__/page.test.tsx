import { it, describe } from 'vitest';

describe('todoListコンポーネント表示確認', () => {
  it.todo('todoListコンポーネントが表示されていること');
  it.todo('todoを作成する「アイテム追加」ボタンが表示されていること');
});

describe('「アイテム追加」モーダル表示確認', () => {
  it.todo('「アイテム追加」ボタン押下後に「アイテム追加」モーダルが表示されること');
  it.todo('「保存」ボタン押下後に「アイテム追加」モーダルが非表示になり、todoListコンポーネントが表示されること');
  it.todo(
    '「アイテム追加」モーダルの「×」アイコン押下後に「アイテム追加」モーダルが非表示になり、todoListコンポーネントが表示されること'
  );
});

describe('「アイテム編集」モーダル表示確認', () => {
  it.todo('「アイテム編集」アイコン押下後に「アイテム編集」モーダルが表示されること');
  it.todo('「保存」ボタン押下後に「アイテム編集」モーダルが非表示になり、todoListコンポーネントが表示されること');
  it.todo(
    '「アイテム編集」モーダルの「×」アイコン押下後に「アイテム編集」モーダルが非表示になり、todoListコンポーネントが表示されること'
  );
});

describe('「アイテム削除」モーダル表示確認', () => {
  it.todo('「削除」ボタン押下後に「アイテム削除」モーダルが表示されること');
  it.todo(
    '「アイテム削除」モーダルの「×」アイコン押下後に「アイテム削除」モーダルが非表示になり、todoListコンポーネントが表示されること'
  );
});
