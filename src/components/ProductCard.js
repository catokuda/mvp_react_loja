import React from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product, onOpenModal, onAddToCart }) => {
  return (
    <Card sx={{ width: 320, margin: '10px' }}>
      {/* Título e Subtítulo */}
      <div>
        <Typography level="title-lg">{product.name}</Typography>
        <Typography level="body-sm">{product.category}</Typography>
        <IconButton
          aria-label={`Bookmark ${product.name}`}
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>

      {/* Imagem do Produto */}
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            objectFit: 'contain',  // Ajusta a imagem para caber no espaço sem cortar
            width: '100%',         // A imagem ocupa 100% da largura do container
            height: '100%',        // A imagem ocupa 100% da altura do container
          }}
        />
      </AspectRatio>

      {/* Conteúdo do Card */}
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Preço:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
            R$ {product.price.toFixed(2)}
          </Typography>
        </div>

        {/* Botões "Saiba Mais" e ícone "Adicionar ao Carrinho" */}
        <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto', alignItems: 'center' }}>
          <Button
            variant="solid"
            size="md"
            color="primary"
            onClick={() => onOpenModal(product)}
            sx={{ fontWeight: 600 }}
          >
            Saiba Mais
          </Button>
          <IconButton
            aria-label="Adicionar ao Carrinho"
            color="primary"
            onClick={() => alert(`${product.name} adicionado ao carrinho!`)
      
          }
            sx={{ fontSize: 24 }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
