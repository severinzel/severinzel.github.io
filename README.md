# Как добавить новый чеклист

1. Заходим в папку `/checklist`, жмем кнопку `Add file -> Create new file` в правом верхнем углу редактора, даем ему имя и вставляем туда содержимое файла уже существующего чеклиста
2. Меняем название между тегами `title` на новое (в данном случае договор):
```
<title>Договор</title>
```
2. Меняем название между тегами `header` на новое (в данном случае `Договор`):
```
<header>
    <h1>Договор</h1>
</header>
```
3. Чтобы добавить новую строку в чеклисте, копируем существующий блок текста вида:
```
<li>
    <label>
        <input type="checkbox"> Пункт 1
    </label>
</li>
```
и меняем текст рядом с ним (в данном случае `Пункт 1`) на новый
4. Нажимаем `Commit changes` в правом верхнем углу редактора
5. Переходим в файл `index.html` в корне репозитория, жмем кнопку `Edit this file` в правом верхнем углу редактора
6. Копируем в этом файле последнюю строку вида
```
<li><a href="checklists/checklist3.html">Чеклист 3</a></li>
```
и вставляем её ниже, после чего меняем `checklist3.html` на имя нового файла, которое мы дали в пункте 1, а `Чеклист 3` на его новое название