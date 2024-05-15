import { FC } from 'react';
import styles from './styles.module.scss';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import top from '../../shared/assets/image/profile/order/top.png';
import bottom from '../../shared/assets/image/profile/order/botton.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import empty from '../../shared/assets/image/profile/order/empty.png';
import { getRouteProductId } from '../../shared/consts/router.ts';
import { Button } from '../../shared/ui/button';
import { OrderResponse } from '../../pages/profile/model/types/orderHistoryInterface.ts';

export const ProfileOrders: FC<{ order?: OrderResponse[] }> = ({ order }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onNavigateToProduct = (id: string) => {
    return navigate(getRouteProductId(id));
  };

  const OrderItem: FC<{ item: OrderResponse }> = ({ item }) => {
    return (
      <Disclosure>
        {({ open }) => (
          <div className={styles.wrapper}>
            <DisclosureButton className={styles.item}>
              <div className={styles.smallWrapper}>
                <div className={styles.item__container}>
                  <div className={styles.item__number}>
                    <div
                      className={`${styles.item__number_orderStatus} 
									${item.status === 'COMPLETED' && styles.completed} 
									${item.status === 'CANCELLED' && styles.canceled}`}
                    ></div>
                    <div className={styles.item__number_info}>
                      <span className={styles.order}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        {t('profile.order.title')} № {item.id},{' '}
                        <span>{item.address.date}</span>
                      </span>
                      <span className={styles.status}>{item.status}</span>
                    </div>
                  </div>
                  <div className={styles.item__price}>
                    <div className={styles.item__price_title}>
                      {t('profile.order.total')}
                    </div>
                    <div className={styles.item__price_total}>
                      {item.sum} <span>USD</span>
                    </div>
                  </div>
                </div>

                <div className={styles.secondWrapper}>
                  <div className={styles.item__image}>
                    {item.orderItems.length <= 3 ? (
                      <>
                        {item.orderItems.map((product) => (
                          <img
                            src={product.imageUrls[1]}
                            alt={product.name}
                            key={product.name + product.quantity}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        <img
                          src={item.orderItems[0].imageUrls[1]}
                          alt={item.orderItems[0].name}
                        />
                        <span className={styles.quantity}>
                          +{item.orderItems.length}
                        </span>
                      </>
                    )}
                  </div>
                  <div className={styles.item__openMenu}>
                    {open ? (
                      <img src={top} alt="menu-top" />
                    ) : (
                      <img src={bottom} alt="bottom-top" />
                    )}
                    <div className={styles.item__price}>
                      <div className={styles.item__price_title}>
                        {t('profile.order.total')}
                      </div>
                      <div className={styles.item__price_total}>
                        {item.sum} <span>USD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!open && (
                <div className={styles.smallContent}>
                  <div className={styles.item__image}>
                    {item.orderItems.length <= 3 ? (
                      <>
                        {item.orderItems.map((product, index) => (
                          <img
                            src={product.imageUrls[1]}
                            alt={product.name}
                            key={index}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        <img
                          src={item.orderItems[0].imageUrls[1]}
                          alt={item.orderItems[0].name}
                        />
                        <span className={styles.quantity}>
                          +{item.orderItems.length}
                        </span>
                      </>
                    )}
                  </div>
                  <div className={styles.item__price}>
                    <div className={styles.item__price_title}>
                      {t('profile.order.total')}
                    </div>
                    <div className={styles.item__price_total}>
                      {item.sum} <span>USD</span>
                    </div>
                  </div>
                </div>
              )}
            </DisclosureButton>

            <DisclosurePanel className={styles.info}>
              <div className={styles.info__user}>
                <div className={styles.info__user_delivery}>
                  <h4>{t('profile.order.info')}</h4>
                  <p>
                    {t('profile.order.delivery')}{' '}
                    {item.address.type === 'mail'
                      ? 'pickup'
                      : item.address.type}
                  </p>
                  <p>
                    {item.address.house ?? item.address.flat}{' '}
                    {item.address.entrance ?? ''} {item.address.street},
                  </p>
                  <p>{item.address.city}</p>
                </div>
                <div className={styles.info__user_recipient}>
                  <h4>{t('profile.order.recipient')}</h4>
                  <p>
                    {item.user.firstName} {item.user.lastName}
                  </p>
                  <p>
                    {t('profile.order.tel')} +380
                    {item.user.phoneNumber}
                  </p>
                </div>
              </div>
              <div className={styles.info__products}>
                {item.orderItems.map((product, index) => (
                  <div key={index} className={styles.info__products_product}>
                    <div className={styles.product__wrapper}>
                      <div
                        onClick={() =>
                          onNavigateToProduct(String(product.productId))
                        }
                        className={styles.image}
                      >
                        <img src={product.imageUrls[1]} alt={product.name} />
                      </div>
                      <div className={styles.title}>
                        <span>{product.name}</span>
                        <span>{product.size}</span>
                      </div>
                    </div>
                    <div className={styles.quantity}>
                      {product.quantity} {t('profile.order.pc')}
                    </div>
                    <div className={styles.price}>
                      {product.price} <span> USD</span>
                    </div>
                  </div>
                ))}
                <div className={styles.info__total}>
                  <h3>{t('profile.order.total')}:</h3>
                  <p>
                    {item.sum} <span>USD</span>
                  </p>
                </div>
              </div>
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    );
  };
  return (
    <article>
      {order?.length ? (
        <div>
          {order.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <div className={styles.emptyOrderInfo}>
            <h1>{t('profile.order.title2')}</h1>
            <p>{t('profile.order.text1')}</p>
            <p>{t('profile.order.text2')}</p>
            <form target={'_top'}>
              <Button text={t('profile.order.btn')} />
            </form>
          </div>
          <div className={styles.emptyOrderImage}>
            <img src={empty} alt="empty-image" />
          </div>
        </div>
      )}
    </article>
  );
};
