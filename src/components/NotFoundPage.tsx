import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notFoundPage');

  return (
    <>
      <p>{t('title')}</p>
      <p>{t('description')}</p>
    </>
  );
}
