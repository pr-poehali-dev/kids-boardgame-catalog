import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  genre: string;
  age: string;
  players: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  links?: {
    ozon?: string;
    wildberries?: string;
    igroved?: string;
    hobbygames?: string;
    mosigra?: string;
  };
}

const games: Game[] = [
  {
    id: 1,
    title: 'Сырный замок',
    genre: 'Стратегия',
    age: '3+',
    players: '2-4',
    duration: '20-30 мин',
    price: 3290,
    image: 'https://cdn.poehali.dev/files/b6595022-e00a-4a21-907e-ee789d021ca8.jpg',
    description: 'Мышки собирают сырную коллекцию в старом замке с ловушками',
    links: {
      ozon: 'https://www.ozon.ru/product/nastolnaya-igra-syrnyy-zamok-5501859/',
      wildberries: 'https://www.wildberries.ru/catalog/14111120/detail.aspx',
      igroved: 'https://www.igroved.ru/games/burg-appenzell/',
      hobbygames: 'https://hobbygames.ru/sirnij-zamok',
      mosigra: 'https://www.mosigra.ru/sirnij-zamok/'
    }
  },
  {
    id: 2,
    title: 'Микадо',
    genre: 'Ловкость',
    age: '6+',
    players: '2-8',
    duration: '15-30 мин',
    price: 495,
    image: 'https://cdn1.ozone.ru/s3/multimedia-d/6017185349.jpg',
    description: 'Вытащите палочку из кучи, не задев остальные. Игра на ловкость и концентрацию',
    links: {
      ozon: 'https://www.ozon.ru/product/dorozhnaya-igra-mikado-vozmi-s-soboy-164446316/',
      wildberries: 'https://www.wildberries.ru/catalog/9017880/detail.aspx',
      igroved: 'https://www.igroved.ru/games/mikado-series/mikado/'
    }
  }
];

const genres = ['Все', 'Стратегия', 'Приключения', 'Детектив', 'Семейная', 'Научная фантастика', 'Хоррор', 'Ловкость'];
const ages = ['Все', '3+', '5+', '6+', '7+', '8+', '9+', '10+', '12+'];
const playerCounts = ['Все', '2', '3', '4', '5', '6'];

export default function Index() {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [selectedAge, setSelectedAge] = useState('Все');
  const [selectedPlayers, setSelectedPlayers] = useState('Все');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const filteredGames = games.filter(game => {
    const genreMatch = selectedGenre === 'Все' || game.genre === selectedGenre;
    const ageMatch = selectedAge === 'Все' || game.age === selectedAge;
    const playersMatch = selectedPlayers === 'Все' || game.players.includes(selectedPlayers);
    const priceMatch = game.price >= priceRange[0] && game.price <= priceRange[1];
    return genreMatch && ageMatch && playersMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-16 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            🎲 Мир настольных игр
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Найди идеальную игру для всей семьи!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Users" size={20} className="text-secondary" />
              <span className="font-medium">Для всей семьи</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Star" size={20} className="text-accent" />
              <span className="font-medium">Лучшие игры</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Zap" size={20} className="text-primary" />
              <span className="font-medium">Быстрая доставка</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-card rounded-2xl p-6 shadow-lg border-2 border-border animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Filter" size={24} className="text-primary" />
            Фильтры
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
                <Icon name="Tag" size={18} className="text-secondary" />
                Жанр
              </label>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <Button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    variant={selectedGenre === genre ? 'default' : 'outline'}
                    className="rounded-full transition-all hover:scale-105"
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
                <Icon name="Cake" size={18} className="text-accent" />
                Возраст
              </label>
              <div className="flex flex-wrap gap-2">
                {ages.map(age => (
                  <Button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    variant={selectedAge === age ? 'default' : 'outline'}
                    className="rounded-full transition-all hover:scale-105"
                  >
                    {age}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
                <Icon name="Users" size={18} className="text-secondary" />
                Количество игроков
              </label>
              <div className="flex flex-wrap gap-2">
                {playerCounts.map(count => (
                  <Button
                    key={count}
                    onClick={() => setSelectedPlayers(count)}
                    variant={selectedPlayers === count ? 'default' : 'outline'}
                    className="rounded-full transition-all hover:scale-105"
                  >
                    {count === 'Все' ? count : `${count} игрока`}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
                <Icon name="DollarSign" size={18} className="text-primary" />
                Цена: {priceRange[0]} - {priceRange[1]} ₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={5000}
                step={100}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Каталог игр
          </h2>
          <p className="text-muted-foreground">
            Найдено игр: <span className="font-bold text-primary">{filteredGames.length}</span>
          </p>
        </div>

        {filteredGames.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4 animate-bounce-subtle">😢</div>
            <h3 className="text-2xl font-bold mb-2">Игры не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить фильтры</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <Card 
                key={game.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-bold">
                    {game.price} ₽
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {game.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Tag" size={16} className="text-secondary" />
                      <span className="font-medium">{game.genre}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Users" size={16} className="text-secondary" />
                      <span>{game.players} игроков</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span>{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        {game.age}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                  {game.links ? (
                    <div className="w-full space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground text-center mb-2">Купить на:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {game.links.ozon && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(game.links!.ozon, '_blank')}
                          >
                            Ozon
                          </Button>
                        )}
                        {game.links.wildberries && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(game.links!.wildberries, '_blank')}
                          >
                            Wildberries
                          </Button>
                        )}
                        {game.links.igroved && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(game.links!.igroved, '_blank')}
                          >
                            Игровед
                          </Button>
                        )}
                        {game.links.hobbygames && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(game.links!.hobbygames, '_blank')}
                          >
                            Hobby Games
                          </Button>
                        )}
                        {game.links.mosigra && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs hover:bg-primary hover:text-primary-foreground col-span-2"
                            onClick={() => window.open(game.links!.mosigra, '_blank')}
                          >
                            Мосигра
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Button className="w-full group-hover:bg-secondary transition-colors">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-card border-t-4 border-primary mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Мир настольных игр. Играй и наслаждайся! 🎲
          </p>
        </div>
      </footer>
    </div>
  );
}